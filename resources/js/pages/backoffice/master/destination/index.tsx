import { AppLayout } from "@/layouts/app-layout";

export default function DestinationIndex() {
    return (
        <div>
            <h1>Destination</h1>
        </div>
    );
}

DestinationIndex.layout = (page: any) => <AppLayout children={page} />;