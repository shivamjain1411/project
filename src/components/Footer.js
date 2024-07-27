import React from "react";
import logo_only from "../Images/royal_logo_only.png";
import name from "../Images/royal_games_logo.png";
import { FaDiscord } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
function Footer() {
  return (
    <div className="p-8 bg-[#140934] pt-12">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <img src={logo_only} className="w-36 h-36 " />
        </div>
        <div>
          <img src={name} className="h-24 " />
          <br />
        </div>
        <div>
          <p className="text-white font-bold">Contact Us | Follow Us</p>
        </div>
        <div className="flex mt-4">
          <div className="flex gap-x-16">
            <div className="flex">
              <div className=" flex">
                {/* <FaDiscord style={{ color: "blue", width: "40px" }} /> */}
                <SocialIcon
                  url="https://discord.com/"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="px-3">
                <p className="text-white font-bold">@Royalgame</p>
              </div>
            </div>
            <div className="flex">
              <div className=" flex">
                {/* <FaDiscord style={{ color: "blue", width: "40px" }} /> */}
                <SocialIcon
                  url="https://instagram.com/"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="px-3">
                <p className="text-white font-bold">@Royalgame</p>
              </div>
            </div>
            <div className="flex">
              <div className=" flex">
                {/* <FaDiscord style={{ color: "blue", width: "40px" }} /> */}
                <SocialIcon
                  url="https://facebook.com/"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="px-3">
                <p className="text-white font-bold">@Royalgame</p>
              </div>
            </div>
            <div className="flex">
              <div className=" flex">
                {/* <FaDiscord style={{ color: "blue", width: "40px" }} /> */}
                <SocialIcon
                  url="https://whatsapp.com/"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="px-3">
                <p className="text-white font-bold">+91 75********</p>
              </div>
            </div>
            <div className="flex">
              <div className=" flex">
                {/* <FaDiscord style={{ color: "blue", width: "40px" }} /> */}
                <SocialIcon
                  url="https://x.com/"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div className="px-3">
                <p className="text-white font-bold">@Royalgame</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
