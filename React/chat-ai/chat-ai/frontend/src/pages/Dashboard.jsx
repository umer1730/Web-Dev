import Sidebar from "../components/Sidebar";

import ChatArea from "../components/ChatArea";

function Dashboard() {
  return(
    <div className="flex">
      <Sidebar />
      <ChatArea />
    </div>
  )
}

export default Dashboard