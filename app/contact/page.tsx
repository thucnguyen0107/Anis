import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Grid from "components/grid";

export default function Contact() {
    return(
        <div className="mx-auto my-4 flex max-w-6xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
        <h2 className="text-center mb-4 text-2xl font-bold">Contact Us</h2>
        <p className="text-center my-2 text-xl">Whether you have questions or you would just like to say hello, contact us.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, atque!</p>
        <div className="">
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
                <div className="col-lg-4 col-sm-6">
                <div className="text-center mb-4 p-8 items-center justify-center">
                    <div className="flex items-center justify-center">
                    <PhoneIcon className="size-16 text-red-500" />
                    </div>
                    <div className="my-4 text-xl">Contact Quickly</div>
                    <div className="text-center text-xl font-bold">0389 279 938</div>
                </div>
                </div>
            </div>

            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
                <div className="col-lg-4 col-sm-6">
                <div className="text-center mb-4 p-8 items-center justify-center">
                    <div className="flex items-center justify-center">
                    <EnvelopeIcon className="size-16 text-red-500 " />
                    </div>
                    <div className="my-4 text-xl">Email</div>
                    <div className="text-center text-xl font-bold">anisvn.manager@gmail.com</div>
                </div>
                </div>
            </div>

            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
                <div className="col-lg-4 col-sm-6">
                <div className="text-center mb-4 p-8 items-center justify-center">
                    <div className="flex items-center justify-center">
                    <MapPinIcon className="size-16 text-red-500 " />
                    </div>
                    <div className="my-4 text-xl">Location</div>
                    <div className="text-center text-xl font-bold">85 Tran Quang Dieu, Ward 14, District 3</div>
                </div>
                </div>
            </div>
        </Grid>
        </div>
        </div>
    )
}