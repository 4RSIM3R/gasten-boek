import { Button, TextField } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { showError } from "@/lib/error";
import { Official } from "@/types/official";
import { useForm } from "@inertiajs/react";

type OfficialFormProps = {
    official?: Official;
};

export default function OfficialForm({ official }: OfficialFormProps) {

    const { data, setData, post, put, errors, processing } = useForm<Official>({
        name: official?.name,
    } satisfies Official);

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (official) {
            put(route('backoffice.master.officials.update', { id: module?.id }), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        } else {
            post(route('backoffice.master.officials.store'), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        }
    }

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Perangkat daerah</h1>
                    <p className="text-sm text-gray-500" >Form perangkat daerah</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="my-4 grid grid-cols-12 gap-4" >
                <TextField
                    label="Nama"
                    placeholder="Nama Perangkat daerah"
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
    )

}

OfficialForm.layout = (page: any) => <AppLayout children={page} />;