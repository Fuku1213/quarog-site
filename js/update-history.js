$(() => {
    $.ajax({
        url: "./update.json",
        type: "GET",
        dataType: "json",
    }).done((data) => {
        for (let i = 0; i < data.history.length; i++) {
            let newer = "",
                change = "",
                fix = "",
                important = "",
                other = "";

            // 更新内容 - 追加
            if (data.history[i].cont.new.length > 0) {
                let cache = "";
                let length = data.history[i].cont.new.length;
                for (let j = 0; j < length; j++) {
                    cache += `<li>${data.history[i].cont.new[j]}</li>`;
                }
                newer = `<li><b>追加</b><ul>${cache}</ul></li>`;
            } else {
                newer = ``;
            }

            // 更新内容 - 変更
            if (data.history[i].cont.change.length > 0) {
                let cache = "";
                let length = data.history[i].cont.change.length;
                for (let j = 0; j < length; j++) {
                    cache += `<li>${data.history[i].cont.change[j]}</li>`;
                }
                change = `<li><b>変更</b><ul>${cache}</ul></li>`;
            } else {
                change = ``;
            }

            // 更新内容 - 修正
            if (data.history[i].cont.fix.length > 0) {
                let cache = "";
                let length = data.history[i].cont.fix.length;
                for (let j = 0; j < length; j++) {
                    cache += `<li>${data.history[i].cont.fix[j]}</li>`;
                }
                fix = `<li><b>修正</b><ul>${cache}</ul></li>`;
            } else {
                fix = ``;
            }

            // 更新内容 - 重要
            if (data.history[i].cont.important.length > 0) {
                let cache = "";
                let length = data.history[i].cont.important.length;
                for (let j = 0; j < length; j++) {
                    cache += `<li>${data.history[i].cont.fix[j]}</li>`;
                }
                important = `<li><b>重要</b><ul>${cache}</ul></li>`;
            } else {
                important = ``;
            }

            // 更新内容 - その他
            if (data.history[i].cont.other.length > 0) {
                let cache = "";
                let length = data.history[i].cont.other.length;
                for (let j = 0; j < length; j++) {
                    cache += `<li>${data.history[i].cont.other[j]}</li>`;
                }
                other = `<li><b>その他</b><ul>${cache}</ul></li>`;
            } else {
                other = ``;
            }

            $("#updateLog").append(
                `<h3>アップデート履歴</h3>
                <ul>
                    <li><b style="font-size: 1.4rem;">Ver. ${data.history[i].ver} - ${data.history[i].date}</b>
                        <ul>
                            ${important}
                            ${newer}
                            ${change}
                            ${fix}
                            ${other}
                        </ul>
                    </li>
                </ul>`
            );
        }
    }).fail((error) => {
        console.log(error);
    });
});