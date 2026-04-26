import { Separator } from "@/components/ui/separator";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fragment } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";

type ThreeTabsProps = {
  slug: string;
};

export default function ThreeTabs({ slug }: ThreeTabsProps) {
  const { ui } = useSiteContent();
  const tabs = [
    {
      value: "overview",
      label: ui.projectDetail.tabs.overview,
    },
    {
      value: "readme",
      label: ui.projectDetail.tabs.readme,
    },
    {
      value: "website",
      label: ui.projectDetail.tabs.website,
    },
  ];

  return (
    <TabsList
      aria-label={ui.projectDetail.tabsLabel}
      variant="line"
      className="flex h-9 w-full min-w-0 rounded-none bg-transparent p-0 px-1.5 text-foreground"
    >
      {tabs.map((tab, index) => (
        <Fragment key={`${slug}-${tab.value}`}>
          {index > 0 && <Separator orientation="vertical" />}
          <TabsTrigger
            value={tab.value}
            className="min-w-0 flex-1 basis-0 rounded-none data-active:bg-transparent data-active:text-foreground"
          >
            {tab.label}
          </TabsTrigger>
        </Fragment>
      ))}
    </TabsList>
  );
}
