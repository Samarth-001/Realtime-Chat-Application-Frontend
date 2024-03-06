import { useState, useEffect } from "react";
import Avatar from "../../assets/Avatar.png";
import InputComp from "../../components/Input/InputComp";

const Dashboard = () => {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mary",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Alexander",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Alex",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Larry",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Trevor",
      status: "Available",
      img: Avatar,
    },
  ];

  useEffect(() => {
    const fetchConversations = async () => {
      const loggenInUser = JSON.parse(localStorage.getItem('user:detail'))
      const res = await fetch(`http://localhost:8000/api/conversations/${loggenInUser.id}`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
        }
      })
      const resData = await res.json();
      setConversations(resData);
    }
    fetchConversations();
  }, [])

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')))
  const [conversations, setConversations] = useState([])
  console.log(user);
  console.log(conversations);

  return (
    <div className="w-full flex">
      <div className="w-[25%] bg-secondary">
        <div className="flex justify-center items-center my-8">
          <img src={Avatar} alt="Profile pic" width={60} height={60} />
          <div className="ml-4">
            <h3 className="text-2xl">{user?.fullName}</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-9">
          <div>Messages</div>
          <div className="">
            {conversations.map(({ conversationId, secondUser }) => {
              return (
                <div className="flex items-center my-8 pb-3 border-b border-b-gray-300">
                  <img src={Avatar} alt="Profile pic" width={45} height={45} />
                  <div className="ml-4">
                    <h3 className="text-xl">{secondUser?.fullName}</h3>
                    <p className="font-light">{secondUser?.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] border h-screen bg-white flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-10 rounded-full flex items-center px-10">
          <div>
            <img src={Avatar} width={50} height={50} alt="Pictur" />
          </div>
          <div className="ml-5 mr-auto">
            <h3 className="text-lg font-semibold">Alexander</h3>
            <p className="text-sm font-light text-gray-600">Online</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 9l5 -5" />
              <path d="M16 4l4 0l0 4" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] border w-full overflow-scroll">
          <div className="h-[1000px] px-10 py-14">
            <div className=" max-w-[45%] bg-secondary rounded-b-xl rounded-tr-xl p-3 pt-2 mb-6">
              Lorem ipsum
            </div>
            <div className="max-w-[43%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-3 pt-2 text-white">
              Lorem ipsum dolor sit amet is the simple adipisicing elit lorem.
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <InputComp placeholder="Type a message..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </div>
      </div>
      <div className="w-[25%] border h-screen bg-light"></div>
    </div>
  );
};

export default Dashboard;
