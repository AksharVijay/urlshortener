import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import bannerLandingPage from "../../public/banner1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const [longUrl, setLongUrl] = useState();

  const navigate = useNavigate();

  const urlSubmitHandler = (e) => {
    e.preventDefault();

    if(longUrl){
      navigate(`/auth?createNew=${longUrl}`)
    }
  }

  const inputChangeHandler = (e) => {
    setLongUrl(e.target.value);
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-5xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need 👇
      </h2>
      <form  onSubmit={urlSubmitHandler}className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          className="h-full flex-1 py-4 px-4"
          value={longUrl}
          type="url"
          placeholder="Enter your long URL"
          onChange={inputChangeHandler}
        />
        <Button
          className="cursor-pointer h-full"
          type="submit"
          variant="destructive"
        >
          Shorten!
        </Button>
      </form>
      <img
        src={bannerLandingPage}
        alt="landing page banner"
        className="w-full my-11 md:px-11"
      />
      <Accordion type="multiple" collapsible className="w-full md:py-11 cursor-pointer">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
