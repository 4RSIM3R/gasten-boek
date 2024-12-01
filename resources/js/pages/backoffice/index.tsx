import { AppLayout } from "@/layouts/app-layout";

export default function Backoffice() {

    return (
        <div>
            hello
        </div>
    )

}

Backoffice.layout = (page: any) => <AppLayout children={page} />;