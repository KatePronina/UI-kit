import requireAll from 'src/pages/requireAll';
import 'src/components/kit/video/video-init';

requireAll(require.context('src', true, /\.scss$/));
