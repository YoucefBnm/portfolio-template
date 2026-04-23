import { TextStaggerInview } from "./systaliko-ui/text-stagger-inview";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 py-5 border-y ">
      <TextStaggerInview
        animation="left"
        staggerStart={"center"}
        className="uppercase text-sm"
      >
        {children}
      </TextStaggerInview>
    </div>
  );
}
