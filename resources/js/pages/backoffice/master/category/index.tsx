import { Button } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";

type CategoryIndexProps = {
    response: any;
};

export default function CategoryIndex({ response }: CategoryIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kategori</h1>
                    <p className="text-sm text-gray-500" >Manajemen kategori tamu</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.categories.create')} >
                        <Button appearance="outline" >
                            <IconPlus />
                            Add New
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="my-4" >
                <p>Hello</p>
            </div>
        </div>
    );
}

CategoryIndex.layout = (page: any) => <AppLayout children={page} />;