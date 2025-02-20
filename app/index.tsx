import useLocale from "@common/hooks/useLocale";
import { View } from "react-native";
import { Button, Text } from "~/components";

export default function Index() {
  const { t } = useLocale();

  return (
    <View className="flex-1 items-center justify-center">
      <Button>
        <Text>
          {t("welcome", {
            name: "Batur",
          })}
        </Text>
      </Button>
    </View>
  );
}
