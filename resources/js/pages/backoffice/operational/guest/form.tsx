import { AppLayout } from "@/layouts/app-layout";

export default function GuestForm() {
    return (
        <div>
            guest form
        </div>
    )
}

GuestForm.layout = (page: any) => <AppLayout children={page} />;