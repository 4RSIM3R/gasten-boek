import { Button } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Base } from "@/types/base";
import { Need } from "@/types/need";
import { Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";

type NeedIndexProps = {
    response: Base<Need[]>;
};

export default function NeedIndex({ response }: NeedIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Keperluan</h1>
                    <p className="text-sm text-gray-500" >Manajemen keperluan bertamu</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.needs.create')} >
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

NeedIndex.layout = (page: any) => <AppLayout children={page} />;