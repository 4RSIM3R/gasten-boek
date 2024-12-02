import { AppLayout } from "@/layouts/app-layout";
import { Need } from "@/types/need";

type NeedFormProps = {
    need?: Need;
};

export default function NeedForm({need}: NeedFormProps) {
    return (
        <div>
            <h1>Need Form</h1>
        </div>
    );
}

NeedForm.layout = (page: any) => <AppLayout children={page} />;