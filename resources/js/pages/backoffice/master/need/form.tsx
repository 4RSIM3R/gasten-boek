import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { showError } from "@/lib/error";
import { Need } from "@/types/need";
import { useForm } from "@inertiajs/react";

type NeedFormProps = {
    need?: Need;
};

export default function NeedForm({ need }: NeedFormProps) {

    const { data, setData, post, put, processing, errors } = useForm<Need>({
        name: need?.name,
    } satisfies Need);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (need) {
            put(route('backoffice.master.needs.update', { id: module?.id }), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        } else {
            post(route('backoffice.master.needs.store'), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        }

    };

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Keperluan</h1>
                    <p className="text-sm text-gray-500" >Form keperluan tamu</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4">
                <TextField
                    label="Keperluan"
                    placeholder="Nama Keperluan"
                    name="name"
                    value={data.name}
                    onChange={(value) => setData('name', value)}
                    errorMessage={errors.name}
                    className="col-span-12"
                />
                <div className="col-span-12" >
                    <Button isDisabled={processing} type="submit" >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

NeedForm.layout = (page: any) => <AppLayout children={page} />;