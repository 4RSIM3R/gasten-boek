import { AppLayout } from "@/layouts/app-layout";

export default function NeedForm() {
    return (
        <div>
            <h1>Need Form</h1>
        </div>
    );
}

NeedForm.layout = (page: any) => <AppLayout children={page} />;