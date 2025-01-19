import useLocale from "@common/hooks/useLocale";
import { Text, View } from "react-native";

export default function Index() {
  const { t } = useLocale();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 text-3xl">
        {t("welcome", {
          name: "Batur",
        })}
      </Text>
    </View>
  );
}
