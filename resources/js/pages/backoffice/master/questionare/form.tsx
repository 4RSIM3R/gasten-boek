import { AppLayout } from "@/layouts/app-layout";

export default function QuestionareForm() {
    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kuisioner</h1>
                    <p className="text-sm text-gray-500" >Form kuisioner</p>
                </div>
            </div>
        </div>
    );
}

QuestionareForm.layout = (page: any) => <AppLayout children={page} />;