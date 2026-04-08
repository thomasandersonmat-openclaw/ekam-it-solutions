import DemoPlayerClient from "./DemoPlayerClient";

export function generateStaticParams() {
  return [
    { id: 'market-sentinel' },
    { id: 'ai-influencer' },
    { id: 'sdlc-orchestrator' },
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <DemoPlayerClient id={resolvedParams.id} />;
}
