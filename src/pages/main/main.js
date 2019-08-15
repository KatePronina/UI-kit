import requireAll from '../requireAll';
import '../../components/kit/video/video-init';

requireAll(require.context('../../', true, /\.scss$/));
