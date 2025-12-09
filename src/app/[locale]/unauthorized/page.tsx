import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";

export default function UnauthorizedPage() {
	const t = useTranslations("Unauthorized");

	return (
		<main className="flex items-center justify-center min-h-screen">
			<section className="text-center">
				<div className="max-w-md mx-auto px-4 py-8">
					<Fade>
						<h1 className="text-4xl md:text-7xl lg:text-9xl font-extrabold text-primary-600 dark:text-primary-500">
							403
						</h1>
						<h1 className="text-4xl md:text-7xl font-extrabold text-primary-600 dark:text-primary-500">
							{t("title")}
						</h1>
						<p className="mt-4 text-lg md:text-xl font-light text-gray-500 dark:text-gray-400">
							{t("p")}
						</p>
					</Fade>
				</div>
			</section>
		</main>
	);
}
