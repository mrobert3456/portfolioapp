import { FlowResponseStream } from "@aws-sdk/client-bedrock-agent-runtime";
import { ActionType, ChatParams } from "../interfaces/Chat";

const FLOW_API_GW = import.meta.env.VITE_FLOW_API_URL!;

const useAwsFlows = () => {
  const invoke = async (
    input_params: ChatParams
  ): Promise<{
    actionType: ActionType;
    result: ContactInformation | string;
  } | null> => {
    const data: ChatParams = {
      message: input_params.message,
      history: input_params.history,
    };
    return fetch(FLOW_API_GW, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
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
    invoke,
  };
};

export default useAwsFlows;
