import requireAll from 'src/pages/requireAll';
import 'src/components/kit/map/map-init';

requireAll(require.context('src', true, /\.scss$/));
