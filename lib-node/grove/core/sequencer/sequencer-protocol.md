`Sequencer` protocol
================


```
  Sequencer#value() -> {number}
```

Returns the current sequence tracked by the sequencer. This must always advance
forward, never back.

```
  Sequencer#advance(opts {dynamic}) -> {Promise<undefined>}
```

Advances the sequencer. What this actually means (as well as what parameters it takes)
varies by Sequencer type. `Sequencer#advance()` should be able to be called without
arguments, and should advance in a manner sensible for the sequencer type. For
instance, a ClockSequencer advances by reading from its underlying clock. A
UnitSequencer advances by `1` by default. Etc.

