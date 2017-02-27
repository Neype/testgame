$(document).ready(function(){

	window.dmg = 0;
    window.dps = 0;
    window.gold = 0;
    window.hp = 10;
    window.reward = 1;
    window.level = 1;
	
	//Отвечает за случайное перемещение объекта
	function reloadinfo(){
		$('#dmg').html('DMG: ' + dmg)
        $('#dps').html('DPS: ' + dps)
        $('#gold').html('GOLD: ' + gold)
        $('#nextMob').html('Next')
        $('#previousMob').html('Previous')
        $('#mob').html('Mob. HP = ' + hp +' Rew = ' + reward)
        $('#hero').html('Hero')


		if (dmg >= hp){
			dmg = 0;
			gold += reward;
			reloadinfo()
		}
    }
	function dps_tick() {
		dmg += dps;
		reloadinfo()
    }
	$('#mob').click(function () {
        dmg++;
		reloadinfo()
    })

    $('#hero').click(function () {
        if (gold>=10) {
            gold -= 10;
        	dps++;
        }
        reloadinfo()
    })
	$('#nextMob').click(function () {
		level++;
		hp += 10;
		reward += 1;
		reloadinfo()
    })

    $('#previousMob').click(function () {
    	if (level > 1) {
    		level--;
            hp -= 10;
            reward -= 1;
            reloadinfo()
        }

    })

	reloadinfo();
    setInterval(dps_tick, 1000);
});