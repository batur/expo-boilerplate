import useLocale from "@common/hooks/useLocale";
import { Text, View } from "react-native";

export default function Index() {
  const { t } = useLocale();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text className="text-2xl text-emerald-600 text-center">
        {t("welcome", {
          name: "Batur",
        })}
      </Text>
    </View>
  );
}
