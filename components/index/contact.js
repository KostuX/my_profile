import React, { useState, useEffect,useRef} from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import NextLink from "next/link";
import { cfg_site as cfg } from "../../config/cfg_site";
import { printError } from "../../lib/helper/printError";
import { validate } from "../../lib/helper/validator";
import validator from 'validator';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";



import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



var xss = require("xss");
import {
  Facebook,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  Email,
} from "../icons";
export const Index_block5 = (props) => {

  const [msgText, setMsgText] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgError, setMsgError] = useState([]);
  const [submited, setSubmited] = useState(false);

  const text = useRef(null);
  useEffect(()=>{    
    const el = text.current
    gsap.fromTo(el, {opacity:0},{opacity:1, duration:2, scrollTrigger:{
        trigger:el
    }})
  },[])

  function submitEmail() {
    let err = [];
    setMsgError([]);
    setMsgEmail(validator.escape(msgEmail));
    setMsgText(validator.escape(msgText));
    let mail = validate(msgEmail, "email", "Email", 5, 128);
    if (!mail.ok) {
      err = err.concat(mail.data);
    }
    let text = validate(msgText, "text", "Text field", 5, 512);
    if (!text.ok) {
      err = err.concat(text.data);
    }

    if (err.length == 0) {
      setSubmited(true);
      sendEmail();
    } else {
      setMsgError(err);
    }
  }

  async function sendEmail() {



    let endpoint = "/api/contactEmailAPI";
    let api_data = { data: { email: msgEmail, text: msgText } };

    let response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(api_data),
      headers: { "Content-type": "application/json" },
    });
    let res = await response.json();
    if (res.ok) {
      setSubmited(false);
      setMsgEmail("");
      setMsgText("");
      setMsgError(["Sent!"]);
    } else {
      setMsgError(["Unexpected error, please try again..."]);
    }
  }

  return (
    <div className="flex items-center justify-center mt-4 sm:mt-16 h-screen " ref={text}>
      <ParallaxProvider>
      <div className="mx-24  text-center  text-xl max-w-xl  ">
        <Parallax speed={1}>
        <h1 className="mb-5 font-bold">【Contact】</h1>
        </Parallax>
        <Parallax speed={-1}>
        <span className="">
          <span className=" ">
            <span className="text-pink-500"></span>{" "}
            <Input
              size="sm"
              label="Email"
              variant="bordered"
              value={msgEmail}
              placeholder="Enter your email"
              className=" mb-5"
              maxLength={128}
              onChange={(e) => setMsgEmail(e.target.value.trim())}
            />
            <span className="flex">
              <Textarea
                placeholder="Type here..."
                rows={20}
                maxLength={512}
                onChange={(e) => setMsgText(e.target.value)}
              />
              <span className="text-xs place-self-end ">
                {msgText.length != 0 ? 512 - msgText.length : ""}
              </span>
            </span>
            {printError(msgError)}
            <Button
              color="primary"
              variant="ghost"
              className="m-12"
              value={msgText}
              onPress={submitEmail}
              isLoading={submited}
            >
              Submit
            </Button>
          </span>
        </span>
        </Parallax>
        <span className="text-default-500 justify-center xl:flex m-12 place-content-end">
          <NextLink href={cfg.links.github} aria-label="Github">
            <span className="flex  sm:m-4">
              <GithubIcon />
              https://github.com/KostuX
            </span>
          </NextLink>
          <NextLink href={cfg.links.github2} aria-label="Github">
            <span className="flex  sm:m-4">
              <GithubIcon />
              https://github.com/Kostas9999
            </span>
          </NextLink>
          {/*}
          <NextLink href={cfg.links.facebook} aria-label="Facebook">
            <span className="flex sm:m-4">
              <Facebook />
              https://www.facebook.com/KostuX
            </span>
          </NextLink>
          {*/}
          <NextLink
            href={
              "mailto:goldiskiker@gmail.com?subject=Your%20Subject&body=Your%20Message"
            }
            aria-label="Email"
          >
            <span className="flex  sm:m-4">
              <Email />
              goldiskiker@gmail.com
            </span>
          </NextLink>
        </span>
      </div>
      </ParallaxProvider>
    </div>
  );
};
