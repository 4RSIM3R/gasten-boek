import { AppLayout } from "@/layouts/app-layout";
import { Need } from "@/types/need";
import { useForm } from "@inertiajs/react";

type NeedFormProps = {
    need?: Need;
};

export default function NeedForm({ need }: NeedFormProps) {

    const { data, setData, post, put, processing } = useForm({});

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Keperluan</h1>
                    <p className="text-sm text-gray-500" >Form keperluan tamu</p>
                </div>
            </div>
        </div>
    );
}

NeedForm.layout = (page: any) => <AppLayout children={page} />;