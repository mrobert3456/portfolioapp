import {
  BedrockAgentRuntimeClient,
  BedrockAgentRuntimeClientConfig,
  FlowResponseStream,
  InvokeFlowCommand,
  InvokeFlowCommandInput,
  InvokeFlowCommandOutput,
} from "@aws-sdk/client-bedrock-agent-runtime";
import { ActionType, ChatParams } from "../interfaces/Chat";
const useAwsFlows = () => {
  const CONFIG: BedrockAgentRuntimeClientConfig = {
    region: "eu-central-1",
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID!,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY!,
    },
  };

  const client = new BedrockAgentRuntimeClient(CONFIG);

  const invokeFlow = async (
    input_params: ChatParams
  ): Promise<{
    actionType: ActionType;
    result: ContactInformation | string;
  } | null> => {
    const input: InvokeFlowCommandInput = {
      flowIdentifier: "",
      flowAliasIdentifier: "",
      inputs: [
        {
          nodeName: "FlowInputNode",
          nodeOutputName: "document",
          content: {
            document: {
              message: input_params.message,
              history: input_params.history,
            },
          },
        },
      ],
    };
    const command = new InvokeFlowCommand(input);
    return client
      .send(command)
      .then((data: InvokeFlowCommandOutput) => {
        return data.responseStream;
      })
      .then(async (stream: AsyncIterable<FlowResponseStream> | undefined) => {
        for await (const chunkEvent of stream!) {
          return chunkEvent;
        }
      })
      .then((chunkEvent: FlowResponseStream | undefined) => {
        const { flowOutputEvent } = chunkEvent!;
        let actionType: ActionType | null = null;
        let result: ContactInformation | string | null = null;

        if (flowOutputEvent?.nodeName === "FlowOutputNode_5") {
          actionType = "email";
          result = JSON.parse(flowOutputEvent.content!.document as string);
        } else if (flowOutputEvent?.nodeName === "FlowOutputNode_1") {
          actionType = "question";
          result = flowOutputEvent.content!.document as string;
        } else {
          console.log(flowOutputEvent);
        }

        return {
          actionType: actionType!,
          result: result!,
        };
      })
      .catch((error) => {
        throw new Error(`Unkown error occured during flow execution ${error}`);
      });
  };

  return {
    invokeFlow,
  };
};

export default useAwsFlows;
