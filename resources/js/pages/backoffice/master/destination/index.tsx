import { Button } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";

type DestinationIndexProps = {
    response: any;
};

export default function DestinationIndex({ response }: DestinationIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Tujuan</h1>
                    <p className="text-sm text-gray-500" >Manajemen tujuan bertamu</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.destinations.create')} >
                        <Button appearance="outline" >
                            <IconPlus />
                            Add New
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

DestinationIndex.layout = (page: any) => <AppLayout children={page} />;