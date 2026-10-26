# 職務経歴書プロジェクトのメモ

- 職務経歴書の原稿は`docs/README.md`を正本として管理する。Web版とPDF版で職歴や実績の事実を分けない
- 公開情報は本人が確認した事実に限る。社外秘の情報や、根拠のない数値・成果を加えない
- Web版はスマホを基準に、1カラム、読みやすい文字サイズ、横スクロールしない構成にする。見た目は白・濃紺・グレーを基本とし、絵文字や広い表を増やさない
- Web版では`details.web-detail`に詳しい実績を置く。PDFではこの詳細を隠し、要約と主要実績を出力する
- `npm run build:pdf`は`docs/README.pdf`を更新し、GitHub Release用の`output/pdf/職務経歴書.pdf`も生成する
- 内容やスタイルを変更したら、`npm run lint`と`npm run build:pdf`を実行する。スマホ幅のWeb表示とPDF全ページを画像で確認する
