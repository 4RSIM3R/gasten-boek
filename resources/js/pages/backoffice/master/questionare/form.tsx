import { AppLayout } from "@/layouts/app-layout";

export default function QuestionareForm() {
    return (
        <div>
            <h1>Questionare Form</h1>
        </div>
    );
}

QuestionareForm.layout = (page: any) => <AppLayout children={page} />;