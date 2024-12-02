import { Button } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";
import { IconPlus } from "justd-icons";

type QuestionareIndexProps = {
    response: any;
};

export default function QuestionareIndex({ response }: QuestionareIndexProps) {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kuisioner</h1>
                    <p className="text-sm text-gray-500" >Manajemen kuisioner</p>
                </div>
                <div>
                    <Link href={route('backoffice.master.questions.create')} >
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

QuestionareIndex.layout = (page: any) => <AppLayout children={page} />;