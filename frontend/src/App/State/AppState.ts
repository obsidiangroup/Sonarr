import InteractiveImportAppState from 'App/State/InteractiveImportAppState';
import CalendarAppState from './CalendarAppState';
import CommandAppState from './CommandAppState';
import EpisodeFilesAppState from './EpisodeFilesAppState';
import EpisodesAppState from './EpisodesAppState';
import ParseAppState from './ParseAppState';
import QueueAppState from './QueueAppState';
import SeriesAppState, { SeriesIndexAppState } from './SeriesAppState';
import SettingsAppState from './SettingsAppState';
import SystemAppState from './SystemAppState';
import TagsAppState from './TagsAppState';

interface FilterBuilderPropOption {
  id: string;
  name: string;
}

export interface FilterBuilderProp<T> {
  name: string;
  label: string;
  type: string;
  valueType?: string;
  optionsSelector?: (items: T[]) => FilterBuilderPropOption[];
}

export interface PropertyFilter {
  key: string;
  value: boolean | string | number | string[] | number[];
  type: string;
}

export interface Filter {
  key: string;
  label: string;
  filers: PropertyFilter[];
}

export interface CustomFilter {
  id: number;
  type: string;
  label: string;
  filers: PropertyFilter[];
}

interface AppState {
  calendar: CalendarAppState;
  commands: CommandAppState;
  episodeFiles: EpisodeFilesAppState;
  episodesSelection: EpisodesAppState;
  interactiveImport: InteractiveImportAppState;
  parse: ParseAppState;
  queue: QueueAppState;
  series: SeriesAppState;
  seriesIndex: SeriesIndexAppState;
  settings: SettingsAppState;
  system: SystemAppState;
  tags: TagsAppState;
}

export default AppState;
