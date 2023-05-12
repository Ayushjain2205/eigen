"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

import CollectionDetails from "./CollectionDetails";
import DAOperformance from "./Tabs/DAOperformance";

const TabsHolder = () => (
  <Tabs.Root className="flex flex-col w-[1214px] mb-[50px]" defaultValue="tab1">
    <Tabs.List
      className="shrink-0 flex border-b border-black border-[2px] rounded-tl-md rounded-tr-md"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-l border-r rounded-tl border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab1"
      >
        Collection Details
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-l border-r border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab2"
      >
        Members
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-l border-r border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab3"
      >
        DAO Performance
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-l border-r border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab4"
      >
        Storage bounties
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow px-[42px] bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab1"
    >
      <CollectionDetails />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab2"
    >
      <DAOperformance />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab3"
    >
      <DAOperformance />
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab4"
    >
      <h1>Storage Bounties</h1>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
        laboriosam eos dolore nemo ullam, tempore dolorem quaerat repudiandae,
        maiores ipsa vero natus laborum totam! Doloribus odio minus debitis
        quibusdam ut.
      </p>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
        laboriosam eos dolore nemo ullam, tempore dolorem quaerat repudiandae,
        maiores ipsa vero natus laborum totam! Doloribus odio minus debitis
        quibusdam ut.
      </p>
      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
        laboriosam eos dolore nemo ullam, tempore dolorem quaerat repudiandae,
        maiores ipsa vero natus laborum totam! Doloribus odio minus debitis
        quibusdam ut.
      </p>
    </Tabs.Content>
  </Tabs.Root>
);

export default TabsHolder;
