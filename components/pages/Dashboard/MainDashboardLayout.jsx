"use client";
import { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ProfileUpdate from "./Profile/ProfileUpdate";
import OrderHistory from "./Orders/OrderHistory";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";

const MainDashboardLayout = () => {
  const [selected, setSelected] = useState("profile");

  return (
    <>
      <div className="flex w-full flex-col wrapper my-10">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab
            key="profile"
            title={
              <span className="flex items-center gap-2">
                <BsFillPersonFill className="text-lg" />
                <p>Profile</p>
              </span>
            }
          >
            <Card>
              <CardBody>
                <ProfileUpdate />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="appointments"
            title={
              <span className="flex items-center gap-2">
                <RiFileList3Fill className="text-lg" />
                <p>Appointments</p>
              </span>
            }
          >
            <Card>
              <CardBody>
                <OrderHistory />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default MainDashboardLayout;
