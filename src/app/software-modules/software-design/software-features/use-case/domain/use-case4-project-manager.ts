import {UseCaseDataAttribute4ProjectManager} from '../../use-case-data-attribute/domain/use-case-data-attribute4-project-manager';

export class UseCase4ProjectManager {
  id: number; // The id of use case
  useCaseName: string; // The name of use case
  title: string; // The title of use case
  faTitle: string; // The farsi title of use case
  description: string; // The description of use case
  userInterfaceType: string; // The user interface type
  softwareName: string; // The software name
  softwareModuleName: string; // The software module name
  softwareFeatureName: string; // The software feature name
  softwareApplicationPanelName: string; // The software application panel
  softwareRole: string; // The software role
  dataEntity: string; // The data entity
  generationEnable: boolean; // The generation enable
  plantAttributes: Array<UseCaseDataAttribute4ProjectManager>;
  fruitAttributes: Array<UseCaseDataAttribute4ProjectManager>;
  seedsCommandAttributes: Array<UseCaseDataAttribute4ProjectManager>;
  fruitSeedsAttributes: Array<UseCaseDataAttribute4ProjectManager>;
}
