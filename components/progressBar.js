import { Progress } from "@nextui-org/react";
export const progressBar = (data) => {
  return (
    <Progress
      size="sm"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-yellow-500 to-green-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={data.title}
      value={data.value}
      showValueLabel={true}
    />
  );
};
