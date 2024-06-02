import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import NextLink from "next/link";
import { cfg_site as cfg } from "../../config/cfg_site";
import { printError } from "../../lib/helper/printError";
import { validate } from "../../lib/helper/validator";
import {
  Facebook,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  Email,
} from "../../components/icons";
export const Index_block5 = (props) => {
  const [msgText, setMsgText] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgError, setMsgError] = useState([]);
  const [submited, setSubmited] = useState(false);

  function submitEmail() {
    let err = [];
    setMsgError([]);
    let mail = validate(msgEmail, "email", "Email");
    if (!mail.ok) {
      err = err.concat(mail.data);
    }
    let text = validate(msgText, "text", "Text field");
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
    let data = res;
  }

  return (
    <div className="h-screen mt-56 text-center  text-xl">
      <h1 className="mb-5 ">【Contact】</h1>
      <span className="mx-12  grid sm:grid-cols-3 gap-4">
        <span></span>
        <span className=" justify-center h-1/2">
          <span className="text-pink-500"></span>{" "}
          <Input
            size="sm"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            className=" mb-5"
            onChange={(e) => setMsgEmail(e.target.value)}
          />
          <Textarea
            placeholder="Type here..."
            rows={20}
            onChange={(e) => setMsgText(e.target.value)}
          />
          {printError(msgError)}
          <Button
            color="primary"
            variant="ghost"
            className="mt-12"
            onPress={submitEmail}
            isLoading={submited}
          >
            Submit
          </Button>
        </span>
        <span></span>
      </span>
      <span className="text-default-500 justify-center sm:flex m-12 ">
        <NextLink href={cfg.links.github} aria-label="Github">
          <span className="flex  sm:m-12">
            <GithubIcon />
            https://github.com/KostuX
          </span>
        </NextLink>
        <NextLink href={cfg.links.github2} aria-label="Github">
          <span className="flex  sm:m-12">
            <GithubIcon />
            https://github.com/Kostas9999
          </span>
        </NextLink>
        <NextLink href={cfg.links.facebook} aria-label="Facebook">
          <span className="flex sm:m-12">
            <Facebook />
            https://www.facebook.com/KostuX/
          </span>
        </NextLink>

        <NextLink
          href={
            "mailto:goldiskiker@gmail.com?subject=Your%20Subject&body=Your%20Message"
          }
          aria-label="Email"
        >
          <span className="flex  sm:m-12">
            <Email />
            goldiskiker@gmail.com
          </span>
        </NextLink>
      </span>
    </div>
  );
};
