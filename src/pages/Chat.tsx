import ChatAgent from "../_components/rag_tool/ChatAgent";
import PageLayout from "../_components/layout/PageLayout";

const Chat: React.FC = () => {
  return (
    <PageLayout id="notfound">
      <div className="flex gap-2 h-full">
        <div className="flex-[0.7]">
          <ChatAgent />
        </div>

        <div className="flex-[0.3]"></div>
      </div>
    </PageLayout>
  );
};

export default Chat;
