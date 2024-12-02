import { AppLayout } from "@/layouts/app-layout";

export default function GuestIndex() {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Tamu</h1>
                    <p className="text-sm text-gray-500" >Manajemen tamu</p>
                </div>
            </div>
        </div>
    )
}

GuestIndex.layout = (page: any) => <AppLayout children={page} />;