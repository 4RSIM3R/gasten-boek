import { AppLayout } from "@/layouts/app-layout";

export default function GuestIndex() {
    return (
        <div>
            guestIndex
        </div>
    )
}

GuestIndex.layout = (page: any) => <AppLayout children={page} />;