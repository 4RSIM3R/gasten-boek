import { AppLayout } from "@/layouts/app-layout";

export default function NeedIndex() {
    return (
        <div>
            <h1>Need</h1>
        </div>
    );
}

NeedIndex.layout = (page: any) => <AppLayout children={page} />;