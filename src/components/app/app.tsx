import { CSSProperties, useState } from 'react';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState } from 'src/constants/articleProps';
import { Article } from '../article';
import styles from './app.module.scss';

export const App = () => {
	const [defaultArticle, setDefaultArticle] = useState(defaultArticleState);
	return (
		<main>
			<div
				className={styles.main}
				style={
					{
						'--font-family': defaultArticle.fontFamilyOption.value,
						'--font-size': defaultArticle.fontSizeOption.value,
						'--font-color': defaultArticle.fontColor.value,
						'--container-width': defaultArticle.contentWidth.value,
						'--bg-color': defaultArticle.backgroundColor.value,
					} as CSSProperties
				}>
				<ArticleParamsForm
					defaultArticle={defaultArticle}
					setDefaultArticle={setDefaultArticle}
				/>
				<Article />
			</div>
		</main>
	);
};
