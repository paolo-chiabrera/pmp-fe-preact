import { h } from 'preact';
import style from './style';

import ImageList from '../../components/image-list';
import Paging from '../../components/paging';

export default function Home() {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<ImageList />
			<Paging />
		</div>
	);
}
