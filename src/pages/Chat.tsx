import ChatAgent from "../_components/rag_tool/ChatAgent";
import PageLayout from "../_components/layout/PageLayout";

const Chat: React.FC = () => {
  return (
    <PageLayout id="notfound">
      <div className="flex gap-2 h-full">
        <ChatAgent />
      </div>
    </PageLayout>
  );
};

export default Chat;
