StackTower1(Key)
{
    SendInput, %Key%{Space}
}

StackTower2(Key)
{
    SendInput, %Key%{Space}{Space}
    MouseClick, left,,, 2, 0
}

;;;;;;;;;;;  Mouse5  ;;;;;;;;;;;
XButton2 & 1::
StackTower2(1)
return

XButton2 & 2::
StackTower2(2)
return

XButton2 & 3::
StackTower2(3)
return

XButton2 & 4::
StackTower2(4)
return

XButton2 & 5::
StackTower2(5)
return

XButton2 & 6::
StackTower2(6)
return

XButton2 & 7::
StackTower2(7)
return

XButton2 & 8::
StackTower2(8)
return

XButton2 & 9::
StackTower2(9)
return

XButton2 & 0::
StackTower2(0)
return

;;;;;;;;;;; Mouse4 ;;;;;;;;;;;
XButton1 & 1::
StackTower1(1)
return

XButton1 & 2::
StackTower1(2)
return

XButton1 & 3::
StackTower1(3)
return

XButton1 & 4::
StackTower1(4)
return

XButton1 & 5::
StackTower1(5)
return

XButton1 & 6::
StackTower1(6)
return

XButton1 & 7::
StackTower1(7)
return

XButton1 & 8::
StackTower1(8)
return

XButton1 & 9::
StackTower1(9)
return

XButton1 & 0::
StackTower1(0)
return