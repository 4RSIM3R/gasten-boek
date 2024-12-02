import { AppLayout } from "@/layouts/app-layout";

export default function DestinationForm() {
    return (
        <div>
            <h1>Destination Form</h1>
        </div>
    );
}

DestinationForm.layout = (page: any) => <AppLayout children={page} />;