import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Example: undefined;
	BgActions: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
