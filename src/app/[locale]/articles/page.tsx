import { getArticlesData } from "@/app/shared/data/getArticlesData";
import type { Articles } from "@/app/shared/types/main";
import { Card, CardContent } from "@/app/shared/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Article() {
	const t = useTranslations("Articles");
	const articles: Articles[] = getArticlesData({ t });

	return (
		<main className="container-articles">
			<section className="col-span-4 mx-auto">
				<header className="h1 p-6">
					<Fade>
						<h1 className="title-articles mb-4 font-extrabold leading-10 tracking-tight text-3xl md:text-4xl text-center mt-20 md:mt-36">
							{t("h1")}
						</h1>
					</Fade>
				</header>
			</section>

			<section className="my-4 mt-8 md:mt-6" id="articles">
				<h2 className="title-skills font-extrabold leading-10 tracking-tight text-sm md:text-2xl lg:text-2xl mt-8 md:mt-4 mb-8 text-center">
					{t("h2")}
				</h2>
			</section>

			<section className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 md:px-40 mb-52 md:mb-72">
				{articles.map((article, index) => (
					<ActionCard key={index} article={article} />
				))}
			</section>
		</main>
	);
}

function ArticleDescription({ description }: { description: string }) {
	return (
		<div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
			{description}
		</div>
	);
}

function ActionCard({ article }: { article: Articles }) {
	const t = useTranslations("Articles");

	return (
		<Card
			className="max-w-2xl w-full mx-auto transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
                        border-black dark:border-gray-400 dark:hover:shadow-stone-600 cursor-pointer"
		>
			<CardContent className="p-4">
				<div className="relative aspect-video w-full overflow-hidden shrink-0">
					<Image
						src={article.photo}
						alt={article.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
						loading="lazy"
					/>
				</div>

				<p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
					{t("year")}: {article.year}
				</p>

				<h4 className="mt-4 text-lg font-semibold">{article.title}</h4>

				<ArticleDescription description={article.description} />

				<div className="flex mt-4 justify-start items-center gap-3">
					<ActionLinks article={article} />
				</div>
			</CardContent>
		</Card>
	);
}

function ActionLinks({ article }: { article: Articles }) {
	return (
		<>
			{article.webLink && (
				<a href={article.webLink} target="_blank" rel="noreferrer">
					<AiOutlineGlobal
						size={24}
						className="hover:-translate-y-1 transition-transform text-neutral-500 dark:text-neutral-100"
					/>
				</a>
			)}
		</>
	);
}
