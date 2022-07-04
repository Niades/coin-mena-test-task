import { Tab } from "@headlessui/react";

function MyTabs() {
  return (
    <header>
      <span class="text-xl font-medium text-black">Coin Mena Test Task</span>
      <Tab.Group>
        <Tab.List>
          <Tab>Home</Tab>
          <Tab>Trade</Tab>
        </Tab.List>
      </Tab.Group>
    </header>
  );
}

export { MyTabs as MainLayout };
