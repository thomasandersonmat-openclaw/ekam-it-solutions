import DemoPlayerClient from "./DemoPlayerClient";

export function generateStaticParams() {
  return [
    { id: 'market-sentinel' },
    { id: 'ai-influencer' },
    { id: 'sdlc-orchestrator' },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  return <DemoPlayerClient id={params.id} />;
}
